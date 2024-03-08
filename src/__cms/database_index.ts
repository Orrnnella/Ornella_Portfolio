import { Type as T } from '@sinclair/typebox';

export const database_index_schema = T.Object({
	progetti: T.Union([T.Literal('europeana'), T.Literal('isitazine'), T.Literal('macro'), T.Literal('mbeh')])
})

export const database_index = {
  "progetti": [
    "europeana",
    "isitazine",
    "macro",
    "mbeh"
  ]
} as const