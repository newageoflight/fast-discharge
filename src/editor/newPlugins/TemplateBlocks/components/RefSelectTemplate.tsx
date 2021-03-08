import React from 'react'

// template for dynamic links
// ux-wise it should largely work the same as the list template
// however it'll be powered by an API that communicates with your eMR platform of choice
// how should this work?
// my idea atm is this: refs have to be "installed" in the same manner that an extension might
// you insert a ref by typing %% and then it gives you a dropdown of "ref sources" to choose from
// to query the ref source via the ref plugin you need to provide it some mandatory data e.g. mrn, dob, etc.
// the ref then renders a special highlight which can give you the stuff you need

export const RefSelectTemplate: React.FC = () => {
    return (
        <div>
            
        </div>
    )
}
