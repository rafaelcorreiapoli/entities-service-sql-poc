import { produceMessage } from '../../../diplomat/producer'
import { createTechnology } from '../../../db/technology'
import { IContext } from '../../context'
import { createProject } from '../../../db/project'

export const project = {
  createProject: async (parent, { name }, { user, sqs, models }: IContext, info) => {
    console.log('Creating on postgres')
    const project = await createProject({
      name
    }, models.project)

    console.log('Producing projec.t ', project.id)
    produceMessage('NEW_PROJECT.fifo', {
      id: project.id,
      name
    }, sqs)

    return project.toJSON()
  },
}