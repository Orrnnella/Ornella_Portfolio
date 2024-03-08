import { Type as T } from '@sinclair/typebox';

export const database_index_schema = T.Object({
	progetti: T.Union([T.Literal('Europeana'), T.Literal('Isitazine'), T.Literal('Macro'), T.Literal('Mbeh')])
})

export const database_index = {
  "progetti": [
    "Europeana",
    "Isitazine",
    "Macro",
    "Mbeh"
  ]
} as const