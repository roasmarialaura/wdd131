
const currentYear = document.querySelector('#currentYear');

const lastModified = document.querySelector("#lastModified");

const today = new Date();

lastModified.innerHTML = `Last modified: ${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "lastModified"
	}
).format(today)};




