function registrationNumbers(regs) {

    var platein = regs || [];
    var valid = /^((CA|CJ|CF)\s\d{3}\-\d{3})$|^((CA|CJ|CF)\s\d{3}\s\d{3})$|^((CA|CJ|CF)\s\d{4})$/;

    function storePlates(plates) {
        if (plates.match(valid)) {

            if (!platein.includes(plates)) {
                platein.push(plates)
                return true
            } else {
                return false
            }
        }
    }


    let filteredList1 = platein.filter(function (regPlates) { 
        return regPlates.startsWith('CA');
    });
    let filteredList2 = platein.filter(function (regPlates) {
        return regPlates.startsWith('CJ');
    });
    let filteredList3 = platein.filter(function (regPlates) {
        return regPlates.startsWith('CF');
    });


    function getfilteredList1() {
        return filteredList1
    }
    function getfilteredList2() {
        return filteredList2
    }
    function getfilteredList3() {
        return filteredList3
    }

    function getStorePlates() {
        return platein
    }

    return {
        storePlates,
        getStorePlates,
        getfilteredList1,
        getfilteredList2,
        getfilteredList3,
    }

}
