// This object contains every script potentially require by contact forms.
var formScripts = {
	contact: function(){
		// This update the subject field so that Netlify notification email subject is {state} - Fresh EBT - {reason}
		let selectReason = document.querySelector('[name="reason"]')
    selectReason.addEventListener('change', event => {
      console.log(`You chose ${selectReason.value} as a Reason` )
    })
	},
}
// We look for forms needing a script (with the attr data-js-use)
let forms = document.querySelectorAll('form[data-js-use]')
Array.prototype.forEach.call(forms, function(form, i){
	let toUse = form.getAttribute('data-js-use')
	// If the entry exists in formScripts and is a function, we run it.
	if (typeof formScripts[toUse] == "function") {
		formScripts[toUse]()
	}
});
