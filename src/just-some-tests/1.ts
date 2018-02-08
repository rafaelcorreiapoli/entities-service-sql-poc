import { createTechnology } from '../db/technology'
import { createProject } from '../db/project'
import { ISystem } from '../components/system'

const toJson = x => x.toJSON()
const mapJson = x => x.map(toJson)

export const justSomeTests = async (sys: ISystem) => {
  
  const tech = await createTechnology({
    name: 'Teste'
  }, sys.models.technology)

  const tech2 = await createTechnology({
    name: 'Tech 2'
  }, sys.models.technology)

  const tech3 = await createTechnology({
    name: 'Tech 3'
  }, sys.models.technology)
  

  const project = await createProject({
    name: 'My project'
  }, sys.models.project)

  const project2 = await createProject({
    name: 'My project 2'
  }, sys.models.project)
  
  await tech.addProject(project)

  await tech.addChildTechnology(tech2)
  await tech.addChildTechnology(tech3)
  await tech2.addChildTechnology(tech3)

  const tech1Children = await tech.getChildTechnologies().then(mapJson)
  console.log(tech1Children)

  const tech2Parents = await tech2.getParentTechnologies().then(mapJson)
  console.log(tech2Parents)

  const tech3Parents = await tech3.getParentTechnologies().then(mapJson)
  console.log(tech3Parents)
}