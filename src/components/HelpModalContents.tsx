import React from 'react'
import { InlineIcon } from '@iconify/react-with-api';

export const HelpModalContents: React.FC =() => {

    return (
        <>
            <div className="modal-body">
              <p>FastDischarge aims to be an open-source medical documentation platform that is truly <em>fast</em>.</p>
              <p>
                With FastDischarge, you can easily create template fields and prepopulate them with commonly used values of your choice.
                FastDischarge lets you write your progress notes and discharge letters faster, so you can get back to doctoring.
              </p>
              <p>FastDischarge doesn't use any central servers; everything you enter into it is stored locally on your device, so there are no data privacy issues to worry about! (Don't believe me? Check the source code on <a href="https://github.com/newageoflight/fast-discharge">Github</a>!)</p>
              <h3>Usage guide</h3>
              <h4>Writing documents and templates</h4>
              <p>To <strong>create a template field</strong>, type <kbd>{"{{"}</kbd> into the editor or press the <InlineIcon icon="uil:brackets-curly" /> button in the toolbar.</p>
              <p><strong>Set your template options</strong> by clicking on the dropdown menu and typing in some text.</p>
              <p><strong>Cycle to the next template field</strong> by pressing <kbd>TAB</kbd>; <strong>cycle to the previous template field</strong> by pressing <kbd>Shift+TAB</kbd></p>
              <p>If you frequently use a snippet, you can save it as a "dot abbreviation" by selecting it and clicking the <InlineIcon icon="bi:dot" /> dot icon in the hovering selection menu. You will be asked to give it a name.</p>
              <p>You can later invoke the snippet by typing <kbd>.nameOfYourAbbreviation</kbd>, e.g. if you named it "cag" type <kbd>.cag</kbd></p>
              <p>[UNDER DEVELOPMENT] You can also cycle to template fields by pressing <kbd>Ctrl+[</kbd> for the previous and <kbd>Ctrl+]</kbd> for the next</p>
              <h4>Finalising documents</h4>
              <p>To finalise your document and <strong>copy its contents as plain text</strong> (e.g. Web DeLacy), press the <InlineIcon icon="ion:copy-outline" /> button in the toolbar.</p>
              <p>To finalise your document and <strong>copy its contents as rich text</strong> (e.g. PowerChart), press the <InlineIcon icon="ion:copy" /> button in the toolbar.</p>
              <h4>Taking your settings with you</h4>
              <p>I'm still not sure if there are legal issues around having user accounts to store your abbreviations, especially when sensitive patient data is concerned, so you'll have to store them as files if you want to take them around.</p>
              <p>For this there are the <InlineIcon icon="bx:bxs-save" /> "save my abbreviations" and <InlineIcon icon="bi:cloud-upload" /> "load my abbreviations" buttons</p>
            </div>
            <div className="modal-footer">
              <h3>Contributing/credits</h3>
              <p>FastDischarge might frequently break and be full of bugs because it's not even really in alpha yet, so don't expect too much out of it!</p>
              <p>
                If you have experience working with Slate.js, React.js or Typescript, please consider contributing to this project on <a href="https://github.com/newageoflight/fast-discharge">Github</a>.
              </p>
              <p>Developed by <a href="mailto:camint3rnal@live.com">Christopher Chen</a> (JMO/Intern)</p>
            </div>
      </>
    )
}
