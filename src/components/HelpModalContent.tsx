import React from 'react'
import { InlineIcon } from '@iconify/react-with-api';

export const HelpModalContent: React.FC =() => {

    return (
        <>
            <div className="modal-body">
              <p>FastDischarge aims to be an open-source medical documentation platform that is truly <em>fast</em>.</p>
              <p>
                With FastDischarge, you can easily create template fields and prepopulate them with commonly used values of your choice.
                FastDischarge lets you write your progress notes and discharge letters faster, so you can get back to doctoring.
              </p>
              <p>FastDischarge doesn't use any central servers; everything you enter into it is stored locally on your device, so there are no data privacy issues to worry about! (Don't believe me? Check the source code on <a href="https://github.com/newageoflight/fast-discharge">Github</a>!)</p>
              <h2>Usage guide</h2>

              <h3>Templates</h3>
              <p>With FastDischarge you can create several kinds of template fields:</p>
              <dl>
                <dt>Selection (list)</dt>
                <dd>To select from a simple list of terms (e.g. attending doctors), type in <kbd>{"{{"}</kbd></dd>
                <dt>Multiple selection (list)</dt>
                <dd>To select multiple items from a list of terms (e.g. background conditions), type in <kbd>[[</kbd></dd>
                <dt>Dates</dt>
                <dd>To insert a date-picker (e.g. for admission and discharge dates), type in <kbd>@@</kbd></dd>
                <dt>Numbers</dt>
                <dd>To insert a number template, type in <kbd>##</kbd></dd>
                <dt>Formulae</dt>
                <dd>To insert a formula, type in <kbd>$$</kbd>. You can use these to calculate expressions based on the values of other named template fields (similar to say, Excel).
                Formulae are based on Nunjucks/Jinja2 so to find out what is supported, check <a href="https://mozilla.github.io/nunjucks/templating.html#expressions">here</a></dd>
                <dt>Voids</dt>
                <dd>To insert a void (whose sole purpose is to be given a name and replaced), type in <kbd>**</kbd></dd>
              </dl>
              <p><strong>For list template types, you can set options</strong> by clicking on the dropdown menu and typing in some text.</p>
              <p><strong>Cycle to the next template field</strong> by pressing <kbd>TAB</kbd>; <strong>cycle to the previous template field</strong> by pressing <kbd>Shift+TAB</kbd></p>
              <p>You can also cycle to template fields by pressing <kbd>Ctrl+[</kbd> for the previous and <kbd>Ctrl+]</kbd> for the next</p>

              <h3>Snippets and dot abbreviations</h3>
              <p>If you frequently use a snippet, you can save it as a <strong>dot abbreviation</strong> by selecting it and clicking the <InlineIcon icon="bi:dot" /> dot icon in the hovering selection menu. You will be asked to give it a name.</p>
              <p>You can later invoke the snippet by typing <kbd>.nameOfYourAbbreviation</kbd>, e.g. if you named it "cag" type <kbd>.cag</kbd></p>
              <h3>Finalising documents</h3>
              <p>To finalise your document and <strong>copy its contents as plain text</strong> (e.g. Web DeLacy), press the <InlineIcon icon="ion:copy-outline" /> button in the toolbar.</p>
              <p>To finalise your document and <strong>copy its contents as rich text</strong> (e.g. PowerChart), press the <InlineIcon icon="ion:copy" /> button in the toolbar.</p>
              <h3>Taking your settings with you</h3>
              <p>I'm still not sure if there are legal issues around having user accounts to store your abbreviations, especially when sensitive patient data is concerned, so you'll have to store them as files if you want to take them around.</p>
              <p>For this you can go into the <InlineIcon icon="carbon:settings-adjust" /> settings menu and choose to download or upload your abbreviations.</p>
            </div>

            <div className="modal-footer">
              <h2>Contributing/credits</h2>
              <p>FastDischarge might frequently break and be full of bugs because it's still early days, so don't expect too much out of it!</p>
              <p>
                If you have experience working with Slate.js, React.js or Typescript, please consider contributing to this project on <a href="https://github.com/newageoflight/fast-discharge">Github</a>.
              </p>
              <p>Developed by <a href="mailto:camint3rnal@live.com">Christopher Chen</a> (JMO/Intern)</p>
            </div>
      </>
    )
}
