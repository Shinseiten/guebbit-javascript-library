import { addEvent } from '../../';

addEvent(document, 'click', '#test-addevent', (e) => {	//:MouseEvent
	console.log(e);
	alert("This is a document root event now, for optimization");
});
