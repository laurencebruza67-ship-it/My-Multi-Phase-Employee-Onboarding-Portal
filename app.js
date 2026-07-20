// --- STEP BY STEP PROCESSING ARCHITECTURE ---

    // DOM Phase Wrappers
    const phase1 = document.querySelector('#phase1');
    const phase2 = document.querySelector('#phase2');
    const phase3 = document.querySelector('#phase3');

    // DOM Step Headings Indicators
    const step1Indicator = document.querySelector('#step1Indicator');
    const step2Indicator = document.querySelector('#step2Indicator');
    const step3Indicator = document.querySelector('#step3Indicator');

    // DOM Validation Alert Box
    const validationAlert = document.querySelector('#validationAlert');

    // Capture Buttons Links
    const nextToPhase2 = document.querySelector('#nextToPhase2');
    const nextToPhase3 = document.querySelector('#nextToPhase3');
    const restartBtn = document.querySelector('#restartBtn');

    // Input Streams Nodes Selection
    const firstName = document.querySelector('#firstName');
    const middleName = document.querySelector('#middleName');
    const lastName = document.querySelector('#lastName');
    const extName = document.querySelector('#extName');
    const userAge = document.querySelector('#userAge');
    const Gender = document.querySelector('#Gender');
    const Datebirth = document.querySelector('#Datebirth');
    const currentAddress = document.querySelector('#currentAddress');
    const permanentAddress = document.querySelector('#permanentAddress');

    // Target Previews Injections Nodes Selection
    const previewName = document.querySelector('#previewName');
    const previewData = document.querySelector('#previewData');
    const previewCurrent = document.querySelector('#previewCurrent');
    const previewPermanent = document.querySelector('#previewPermanent');

    // TRANSITION ACTION 1: Processing Name Streams
    nextToPhase2.addEventListener('click', () => {
        // Reset dynamic visibility validation container flags
        validationAlert.classList.add('d-none');

        // Capture data values, then apply basic processing filters
        const fNameClean = firstName.value.trim();
        const lNameClean = lastName.value.trim();
        const mNameClean = middleName.value.trim();
        const eNameClean = extName.value.trim();
        const uNameClean = userAge.value.trim();
        const gNameClean = Gender.value.trim();
        const dNameClean = Datebirth.value.trim();

        // Strict validation rule enforcement

        if (fNameClean === "") {
            validationAlert.classList.remove('d-none');
            validationAlert.textContent = "Validation Failure: First Name cannot be blank strings!";
            return;
        }

        else if (lNameClean === "") {
            validationAlert.classList.remove('d-none');
            validationAlert.textContent = "Validation Failure: Last Name cannot be blank strings!";
            return;
        }

        else if (uNameClean === "") {
            validationAlert.classList.remove('d-none');
            validationAlert.textContent = "Validation Failure: Age cannot be blank strings!";
            return;
        }

        else if (uNameClean < 18) {
            validationAlert.classList.remove('d-none');
            validationAlert.textContent = "Validation Failure: Age must be between 18 to 100!";
            return;
        }

        else if (uNameClean > 100) {
            validationAlert.classList.remove('d-none');
            validationAlert.textContent = "Validation Failure: Age must be between 18 to 100!";
            return;
        }

        else if (gNameClean === "") {
            validationAlert.classList.remove('d-none');
            validationAlert.textContent = "Validation Failure: Gender cannot be blank strings!";
            return;
        }

        else if (dNameClean === "") { 
            validationAlert.classList.remove('d-none');
            validationAlert.textContent = "Validation Failure: Date of Birth cannot be blank strings!";
            return;
        }

        // Advance visual stage indicator layout frames
        phase1.classList.add('d-none');
        phase2.classList.remove('d-none');
        
        step1Indicator.className = "text-muted flex-fill";
        step2Indicator.className = "text-primary border-bottom border-3 border-primary pb-1 flex-fill";
    });


    // TRANSITION ACTION 2: Processing Location Layout Streams
    nextToPhase3.addEventListener('click', () => {
        validationAlert.classList.add('d-none');

        const currentAddrClean = currentAddress.value.trim();
        const permAddrClean = permanentAddress.value.trim();

        // Strict layout validation check
        if (currentAddrClean === "" || permAddrClean === "") {
            validationAlert.classList.remove('d-none');
            validationAlert.textContent = "Validation Failure: Both Address fields are required fields!";
            return;
        }

        // Form string manipulation manipulations for Corporate HR Uniformity standards
        const formattedFirst = firstName.value.trim().toUpperCase();
        const formattedMiddle = middleName.value.trim() !== "" ? middleName.value.trim().toUpperCase() + " " : "";
        const formattedLast = lastName.value.trim().toUpperCase();
        const formattedExt = extName.value.trim() !== "" ? "" + extName.value.trim().toUpperCase() : "";
        const formattedAge = userAge.value.trim().toUpperCase();
        const formattedGender = Gender.value.trim() !== "" ? "" + Gender.value.trim().toUpperCase() : "";
        const formattedDate = Datebirth.value.trim().toUpperCase();

        // Target injections handling
        previewName.textContent = `${formattedLast}, ${formattedFirst} ${formattedMiddle}${formattedExt}`;
        previewData.textContent = `${formattedAge}, ${formattedGender} ${formattedDate}`;
        previewCurrent.textContent = currentAddrClean.toUpperCase();
        previewPermanent.textContent = permAddrClean.toUpperCase();

        // Switch panel layout view via d-none modifications
        phase2.classList.add('d-none');
        phase3.classList.remove('d-none');

        step2Indicator.className = "text-muted flex-fill";
        step3Indicator.className = "text-success border-bottom border-3 border-success pb-1 flex-fill";
    });

    // RESTART INTERFACES STATE ACTIONS
    restartBtn.addEventListener('click', () => {
        // Clear value streams inside DOM forms
        firstName.value = ""; middleName.value = ""; lastName.value = ""; extName.value = "";
        userAge.value = ""; Gender.value = ""; Datebirth.value = "";
        currentAddress.value = ""; permanentAddress.value = "";
        
        // Return visibility toggles back to startup condition indexes
        phase3.classList.add('d-none');
        phase1.classList.remove('d-none');

        step3Indicator.className = "text-muted flex-fill";
        step1Indicator.className = "text-primary border-bottom border-3 border-primary pb-1 flex-fill";
    });
