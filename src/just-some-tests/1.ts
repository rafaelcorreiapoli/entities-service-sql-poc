import { createTechnology } from '../db/technology'
import { createProject } from '../db/project'
import { ISystem } from '../components/system'

const toJson = x => x.toJSON()
const mapJson = x => x.map(toJson)

export const justSomeTests = async (sys: ISystem) => {
  const tech1 = await createTechnology({
    name: 'Tech 1'
  }, sys.models.technology)

  const tech2 = await createTechnology({
    name: 'Tech 2'
  }, sys.models.technology)

  const tech3 = await createTechnology({
    name: 'Tech 3'
  }, sys.models.technology)
  

  const project1 = await createProject({
    name: 'My project'
  }, sys.models.project)

  const project2 = await createProject({
    name: 'My project 2'
  }, sys.models.project)
  
  await tech1.addProject(project1)
  await tech1.addChildTechnology(tech2)
  await tech1.addChildTechnology(tech3)
  await tech2.addChildTechnology(tech3)

  const tech1Children = await tech1.getChildTechnologies().then(mapJson)
  console.log(tech1Children)

  const tech2Parents = await tech2.getParentTechnologies().then(mapJson)
  console.log(tech2Parents)

  const tech3Parents = await tech3.getParentTechnologies().then(mapJson)
  console.log(tech3Parents)
}