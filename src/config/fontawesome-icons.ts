import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {IconDefinition, IconPack} from '@fortawesome/fontawesome-common-types';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far, fab)

export default FontAwesomeIcon;