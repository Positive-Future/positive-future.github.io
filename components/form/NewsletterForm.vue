<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" v-bind="attrs" :disabled="!valid" v-on="on">
          {{ $t('form.submit') }}</v-btn
        >
      </template>

      <v-card>
        <v-card-title class="headline my-4">
          {{
            submitting
              ? $t('form.application.dialog.submitting')
              : $t('form.application.dialog.title')
          }}
        </v-card-title>

        <v-card-text v-if="!submitting && !error">
          <div id="mc_embed_signup">
            <form
              id="mc-embedded-subscribe-form"
              action="https://positive-future.us10.list-manage.com/subscribe/post?u=e6936b4bc59d4cfd1979eb351&amp;id=677941c1a1"
              method="post"
              name="mc-embedded-subscribe-form"
              class="validate"
              target="_blank"
              novalidate
            >
              <div id="mc_embed_signup_scroll">
                <h2>Subscribe to our newsletter!</h2>
                <div class="indicates-required">
                  <span class="asterisk">*</span> indicates required
                </div>
                <div class="mc-field-group">
                  <label for="mce-EMAIL"
                    >Email Address <span class="asterisk">*</span>
                  </label>
                  <input
                    id="mce-EMAIL"
                    type="email"
                    value=""
                    name="EMAIL"
                    class="required email"
                  />
                </div>
                <div class="mc-field-group">
                  <label for="mce-FNAME"
                    >First Name <span class="asterisk">*</span>
                  </label>
                  <input
                    id="mce-FNAME"
                    type="text"
                    value=""
                    name="FNAME"
                    class="required"
                  />
                </div>
                <div class="mc-field-group">
                  <label for="mce-LNAME"
                    >Last Name <span class="asterisk">*</span>
                  </label>
                  <input
                    id="mce-LNAME"
                    type="text"
                    value=""
                    name="LNAME"
                    class="required"
                  />
                </div>
                <div class="mc-field-group input-group">
                  <strong>Why are you subscribing? </strong>
                  <ul>
                    <li>
                      <input
                        id="mce-group[18913]-18913-0"
                        type="checkbox"
                        value="1"
                        name="group[18913][1]"
                      /><label for="mce-group[18913]-18913-0"
                        >I plan to participate in the competition!</label
                      >
                    </li>
                    <li>
                      <input
                        id="mce-group[18913]-18913-1"
                        type="checkbox"
                        value="2"
                        name="group[18913][2]"
                      /><label for="mce-group[18913]-18913-1"
                        >I just want to be kept informed</label
                      >
                    </li>
                    <li>
                      <input
                        id="mce-group[18913]-18913-2"
                        type="checkbox"
                        value="4"
                        name="group[18913][4]"
                      /><label for="mce-group[18913]-18913-2"
                        >Maybe both...</label
                      >
                    </li>
                  </ul>
                </div>
                <div
                  id="mergeRow-gdpr"
                  class="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"
                >
                  <div class="content__gdpr">
                    <label>Permission</label>
                    <p>
                      Positive Future will use the information you provide on
                      this form to be in touch with you and provide updates on
                      its activities, events and resources.
                    </p>
                    <fieldset
                      class="mc_fieldset gdprRequired mc-field-group"
                      name="interestgroup_field"
                    >
                      <label class="checkbox subfield" for="gdpr_42033"
                        ><input
                          id="gdpr_42033"
                          type="checkbox"
                          name="gdpr[42033]"
                          value="Y"
                          class="av-checkbox gdpr"
                        /><span
                          >Yes, I agree to receiving electronic messages,
                          including announcements, newsletters, bulletins,
                          invitations to participate in events and other types
                          of notifications and communications relating to any of
                          the activities of Positive Future.</span
                        >
                      </label>
                    </fieldset>
                    <p>
                      You can unsubscribe at any time by clicking the link in
                      the footer of our emails. You can withdraw your consent at
                      any time by clicking the link in the footer of our emails,
                      or by contacting us at info@positive-future.org. By
                      clicking below, you agree that we may process your
                      information in accordance with these terms.
                    </p>
                  </div>
                  <div class="content__gdprLegal">
                    <p>
                      We use Mailchimp as our marketing platform. By clicking
                      below to subscribe, you acknowledge that your information
                      will be transferred to Mailchimp for processing.
                      <a href="https://mailchimp.com/legal/" target="_blank"
                        >Learn more about Mailchimp's privacy practices here.</a
                      >
                    </p>
                  </div>
                </div>
                <div id="mce-responses" class="clear">
                  <div
                    id="mce-error-response"
                    class="response"
                    style="display: none"
                  ></div>
                  <div
                    id="mce-success-response"
                    class="response"
                    style="display: none"
                  ></div>
                </div>
                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div
                  style="position: absolute; left: -5000px"
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_e6936b4bc59d4cfd1979eb351_677941c1a1"
                    tabindex="-1"
                    value=""
                  />
                </div>
                <div class="clear">
                  <input
                    id="mc-embedded-subscribe"
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    class="button"
                  />
                </div>
              </div>
            </form>
          </div>
        </v-card-text>
        <v-card-text v-if="error && !submitting">
          {{ $t('form.application.dialog.error') }}
        </v-card-text>
        <v-card-text v-if="submitting">
          <v-progress-linear indeterminate color="primary"></v-progress-linear>
        </v-card-text>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="dialog = false">
            {{ $t('form.application.dialog.cancel') }}
          </v-btn>
          <v-btn
            color="primary"
            :loading="submitting"
            type="submit"
            @click="$emit('submit')"
          >
            {{ $t('form.application.dialog.submit') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
    }
  },
}
</script>

<script
  type="text/javascript"
  src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
></script>
<script type="text/javascript">
;(function ($) {
  window.fnames = new Array()
  window.ftypes = new Array()
  fnames[0] = 'EMAIL'
  ftypes[0] = 'email'
  fnames[1] = 'FNAME'
  ftypes[1] = 'text'
  fnames[2] = 'LNAME'
  ftypes[2] = 'text'
  /*
   * Translated default messages for the $ validation plugin.
   * Locale: FR
   */
  $.extend($.validator.messages, {
    required: 'Ce champ est requis.',
    remote: 'Veuillez remplir ce champ pour continuer.',
    email: 'Veuillez entrer une adresse email valide.',
    url: 'Veuillez entrer une URL valide.',
    date: 'Veuillez entrer une date valide.',
    dateISO: 'Veuillez entrer une date valide (ISO).',
    number: 'Veuillez entrer un nombre valide.',
    digits: 'Veuillez entrer (seulement) une valeur numérique.',
    creditcard: 'Veuillez entrer un numéro de carte de crédit valide.',
    equalTo: 'Veuillez entrer une nouvelle fois la même valeur.',
    accept: 'Veuillez entrer une valeur avec une extension valide.',
    maxlength: $.validator.format(
      'Veuillez ne pas entrer plus de {0} caractères.'
    ),
    minlength: $.validator.format('Veuillez entrer au moins {0} caractères.'),
    rangelength: $.validator.format(
      'Veuillez entrer entre {0} et {1} caractères.'
    ),
    range: $.validator.format('Veuillez entrer une valeur entre {0} et {1}.'),
    max: $.validator.format(
      'Veuillez entrer une valeur inférieure ou égale à {0}.'
    ),
    min: $.validator.format(
      'Veuillez entrer une valeur supérieure ou égale à {0}.'
    ),
  })
})(jQuery)
var $mcj = jQuery.noConflict(true)
</script>
<style type="text/css">
#mc_embed_signup {
  background: #fff;
  clear: left;
  font: 14px Helvetica, Arial, sans-serif;
}
/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<style type="text/css">
#mc-embedded-subscribe-form input[type='checkbox'] {
  display: inline;
  width: auto;
  margin-right: 10px;
}
#mergeRow-gdpr {
  margin-top: 20px;
}
#mergeRow-gdpr fieldset label {
  font-weight: normal;
}
#mc-embedded-subscribe-form .mc_fieldset {
  border: none;
  min-height: 0px;
  padding-bottom: 0px;
}
</style>
