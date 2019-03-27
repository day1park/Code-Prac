import ComponentName from './ComponentName';

//it means that whatever ComponentName is, it is a default export, which means that it is the only export of it’s kind, this approach is mainly implemented with objects, or some classes like in the case of components:


Import { ComponentName } from './ComponentName';
// It just means that it is a named export by having the export keyword assigned to it which makes it like a property of an exported object:


// we can also import from named exports using aliases:

import * as allComponentMethods from './ComponentName';

/* which reads: import all under the name allComponentMethods*/

import { ComponentName as NamedExported } from './ComponentName';

/*here we change the name on the name export*/