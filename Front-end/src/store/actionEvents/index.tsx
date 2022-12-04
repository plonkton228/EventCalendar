import * as  FetchGuests  from "./FetchGuests";
import * as  FetchEvents  from "./FetchEvents";
import * as  CreateEvents  from "./CreateEvents";
import * as  EditEvent  from "./EditEvent";
import * as  DeleteEvent from "./DeleteEvent";
export default {
    ...FetchGuests,
    ...FetchEvents,
    ...CreateEvents,
    ...EditEvent,
    ...DeleteEvent,
}