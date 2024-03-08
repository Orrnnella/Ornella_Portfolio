import { database } from '$cms'; // eslint-disable-line
import * as P from '$cms/fields';
/* --- */

export default database({
	progetti: P.Object({
		titolo: P.string(),
		tag: P.Array(P.String),
		image: P.String(),
		tipologia: P.String(),
		anno: P.String()
	})
});
