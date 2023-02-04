import { useState } from 'react';

function SignUp(props) {
    const [userInput, setUserInput] = useState({
        enteredName: '',
        enteredEmail: '',
        enteredPassword: ''
    });

    const dobChangeHandler = (event) =>{
        setUserInput({
            ...userInput,
            enteredName: event.target.value,
        })
    };

    const emailChangeHandler = (event) =>{
        setUserInput({
            ...userInput,
            enteredEmail: event.target.value,
        })
    };

    const passwordChangeHandler = (event) =>{
        setUserInput({
            ...userInput,
            enteredPassword: event.target.value,
        })
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const userData = {
            dob: userInput.enteredName,
            email: userInput.enteredEmail,
            password: userInput.enteredPassword
        }
        console.log(userData);
        //props.onAddUser(userData);
        setUserInput({
            enteredDob:'',
            enteredEmail:'',
            enteredPassword:''
        })
    };

    return (
        // <form onSubmit={submitHandler}>
        //     <label htmlFor="name">Name</label>
        //     <input onChange={nameChangeHandler} type="text" value={userInput.enteredName}/>
        //     <label htmlFor="Email">Email</label>
        //     <input onChange={emailChangeHandler} type="email" value={userInput.enteredEmail}/>
        //     <label htmlFor="password">Password</label>
        //     <input onChange={passwordChangeHandler} type="password" value={userInput.enteredPassword}/>
        //     <button type="submit">Sign Up</button>
        // </form>
        <form onSubmit={submitHandler} name="registrationForm" className="dod-registration-form ng-pristine ng-scope ng-valid-maxlength ng-invalid ng-invalid-required" noValidate="" ng-if="vm.aphrodite">
            <div className="dod-aphrodite-inputs">
                <text-input model="vm.email" error-display="vm.submitted" validator="vm.emailValidator" report="vm.validate()" suggestion="example@gmail.com" qa-id="patient-register-username" className="ng-isolate-scope">
                    <div className="dod-input-row dod-text-input" ng-class="{'dod-active': vm.active,
                    'dod-error': vm.isErrorState(),
                    'dod-hide': vm.hide
                    }">
                        <div className="dod-label-column" ng-class="{'dod-subtext-exists': vm.subtextExists}">
                            <label htmlFor="id-3d31" ng-transclude="inputLabel"> 
                                <input-label onChange={emailChangeHandler} className="ng-scope">Email</input-label>
                            </label>
                            <div className="dod-subtext" ng-transclude="subtext"></div>
                        </div>
                        <div className="dod-input-column" ng-class="{'dod-skinnier': vm.obfuscate}">
                            <input ng-disabled="vm.disabled" id="id-3d31" ng-class="{'dod-placeholder-wrap': vm.placeholderWrap}" ng-blur="vm.highlight(false)" ng-change="vm.changed()" ng-focus="vm.highlight(true)" type="text" ng-model="vm.model" maxLength="" placeholder="example@gmail.com" qa-id="patient-register-username-field" className="ng-pristine ng-untouched ng-valid ng-empty ng-valid-maxlength"/>
                        </div>
                    </div>
                </text-input>
                <div ng-class="{'dod-error': vm.dateValidator() &amp;&amp; vm.submitted, 'dod-active': vm.dobActive}">
                    <div className="dod-label-column">
                        <label htmlFor="dod-dob">Date of Birth</label>
                    </div>
                    <div className="dod-input-column">
                        <input onChange={dobChangeHandler}  as-type="dob" mask="19/39/2999" id="dod-dob" ng-if="vm.dateInputType == vm.dateInputTypes.mask" key-trigger="vm.register({'event': event})" ng-change="vm.validate()" ng-model="vm.dob" ng-focus="vm.dobActive = true" ng-blur="vm.dobActive = false" placeholder="mm/dd/yyyy" restrict="reject" required="required" type="text" qa-id="patient-registration-date-of-birth-field" className="ng-pristine ng-untouched ng-scope ng-empty ng-invalid ng-invalid-required"/>
                    </div>
                </div>
                <text-input blur="vm.passwordActiveSet(false)" className="dod-mobile-hidden ng-isolate-scope" error-display="vm.submitted" focus="vm.passwordActiveSet(true)" model="vm.password" obfuscate="true" placeholder-wrap="false" report="vm.validate()" suggestion="********" validator="vm.passwordValidator" qa-id="patient-registration-password">
                    <div className="dod-input-row dod-text-input" ng-class="{'dod-active': vm.active,
                        'dod-error': vm.isErrorState(),
                        'dod-hide': vm.hide
                        }">
                        <div className="dod-label-column" ng-class="{'dod-subtext-exists': vm.subtextExists}">
                            <label htmlFor="id-3c72" ng-transclude="inputLabel">
                                <input-label onChange={passwordChangeHandler} className="ng-scope">Password</input-label>
                            </label>
                            <div className="dod-subtext" ng-transclude="subtext"></div>
                        </div>
                        <div className="dod-input-column dod-skinnier" ng-class="{'dod-skinnier': vm.obfuscate}">
                            <input ng-disabled="vm.disabled" id="id-3c72" ng-class="{'dod-placeholder-wrap': vm.placeholderWrap}" ng-blur="vm.highlight(false)" ng-change="vm.changed()" ng-focus="vm.highlight(true)" type="password" ng-model="vm.model" maxLength="" placeholder="********" qa-id="patient-registration-password-field" className="ng-pristine ng-untouched ng-valid ng-empty ng-valid-maxlength"/>
                        </div>
                    </div>
                </text-input>
                <text-input blur="vm.passwordActiveSet(false)" className="dod-desktop-hidden ng-isolate-scope" error-display="vm.submitted" focus="vm.passwordActiveSet(true)" model="vm.password" obfuscate="true" placeholder-wrap="true" report="vm.validate()" validator="vm.passwordValidator">
                    <div className="dod-input-row dod-text-input" ng-class="{'dod-active': vm.active,
                        'dod-error': vm.isErrorState(),
                        'dod-hide': vm.hide
                        }">
                        <div className="dod-label-column" ng-class="{'dod-subtext-exists': vm.subtextExists}">
                            <label htmlFor="id-b416" ng-transclude="inputLabel">
                                <input-label class="ng-scope">Password</input-label>
                            </label>
                            <div className="dod-subtext" ng-transclude="subtext"></div>
                        </div>
                        <div className="dod-input-column dod-skinnier" ng-class="{'dod-skinnier': vm.obfuscate}">
                            <input ng-disabled="vm.disabled" id="id-b416" ng-class="{'dod-placeholder-wrap': vm.placeholderWrap}" ng-blur="vm.highlight(false)" ng-change="vm.changed()" ng-focus="vm.highlight(true)" type="password" ng-model="vm.model" maxLength="" placeholder="" qa-id="" className="ng-pristine ng-untouched ng-valid ng-empty ng-valid-maxlength dod-placeholder-wrap"/>
                        </div>
                    </div>
                </text-input>
                <password-helper-wrapper show="vm.passwordActive" password="vm.password" className="ng-isolate-scope">
                    <password-helper ng-if="!vm.MWEB_PASSWORD_HELPER_VUE_enabled" show="vm.show" password="vm.password" className="ng-scope ng-isolate-scope">
                        <div className="dod-input-form dod-password-helper" ng-class="{'dod-helper-show': vm.show}">
                            <div ng-class="{'dod-exact-error': vm.passwordLengthError}" className="dod-exact-error">
                                <i className="fa fa-check-circle"></i>
                                8 characters minimum
                            </div>
                            <div className="dod-number-error dod-desktop-hidden dod-exact-error" ng-class="{'dod-exact-error': vm.passwordNumberError}">
                                <i className="fa fa-check-circle"></i>
                                One number
                            </div>
                            <div ng-class="{'dod-exact-error': vm.passwordCapitalizationError}" className="dod-exact-error">
                                <i className="fa fa-check-circle"></i>
                                One uppercase letter
                            </div>
                            <div ng-class="{'dod-exact-error': vm.passwordLowercaseError}" className="dod-exact-error">
                                <i className="fa fa-check-circle"></i>
                                One lowercase letter
                            </div>
                            <div className="dod-number-error dod-mobile-hidden dod-exact-error" ng-class="{'dod-exact-error': vm.passwordNumberError}">
                                <i className="fa fa-check-circle"></i>
                                One number
                            </div>
                        </div>
                    </password-helper>
                </password-helper-wrapper>
                <div className="dod-terms dod-input-row dod-sans-top-margin-mobile" ng-class="{'dod-error': vm.submitted &amp;&amp; !vm.consent}">
                    <div className="dod-input-column dod-check-full-width ng-scope" ng-if="!vm.agreementsNotLoaded" style={{}}>
                        <input type="checkbox" name="consent" key-trigger="register({'event': event})" id="dod-terms" className="dod-mobile-hidden ng-pristine ng-untouched ng-isolate-scope ng-empty ng-invalid ng-invalid-required" ng-keyup="vm.checkboxKeyup($event)" ng-change="vm.validate()" ng-model="vm.consent" required="required" data-as-popover="my.submitted &amp;&amp; (!my.consent || registrationForm.consent.$invalid)" data-as-type="consent" qa-id="patient-registration-consent-checkbox"/>
                        <div className="dod-mock-check dod-desktop-hidden" ng-click="vm.consentToggled()" ng-class="{'dod-checked': vm.consent}" ng-style="vm.checkStyle">
                        </div>
                        <div className="dod-text-wrap">
                            <label htmlFor="dod-terms">
                                I agree to Doctor On Demand's
                            </label>
                            <button className="dod-no-button-styles dod-button-link" ng-click="vm.agreementsModal()">Membership Terms</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dod-aphrodite-buttons">
                <aphrodite-button action="vm.register()" ajaxing="vm.ajaxing" css-class="dod-button-register" qa-id="patient-registration-create-account" className="ng-isolate-scope">
                    <button ng-click="vm.action()" ng-disabled="!vm.active" className="dod-button-register" ng-class="{'dod-ajaxing': vm.ajaxing, 'dod-block': vm.block}" qa-id="patient-registration-create-account-button">
                        <span ng-transclude="">
                            <span className="dod-mobile-hidden ng-scope">Create Account</span>
                            <span className="dod-desktop-hidden ng-scope">Next</span>
                        </span>
                    </button>
                </aphrodite-button>
                <div className="dod-already-a-member dod-mobile-hidden hide-if-iframe">
                    Already a member?
                </div>
            </div>
            <div className="dod-clear"></div>
        </form>
    );
}

export default SignUp;