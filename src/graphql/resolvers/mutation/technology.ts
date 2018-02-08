import { produceMessage } from '../../../diplomat/producer'
import { createTechnology } from '../../../db/technology'
import { IContext } from '../../context'

export const technology = {
  createTechnology: async (parent, { name }, { user, sqs, models }: IContext, info) => {
    console.log('Creating on postgres')
    const tech = await createTechnology({
      name
    }, models.technology)

    console.log('Producing ', tech.id)
    const x = await produceMessage('NEW_TECHNOLOGY.fifo', {
      id: tech.id,
      name
    }, sqs)
    console.log('produced', x)

    return tech.toJSON()
  },
}