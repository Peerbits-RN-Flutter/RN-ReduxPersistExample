import React, { memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSessionField } from '../../reducers/SessionActions'

const WarpperComponent = (PassedComponent) => memo((props) => {

    const state = useSelector((state) => state)
    const session= state.session
    const [loading, setLoading] = useState(false)
    // const route = getRoute()
    const dispatch = useDispatch()

    const setSession = (key,value) => {
        dispatch(setSessionField(key, value))
    }

    /* if (props.navigation) {
         useEffect(() => {
             const f = onFocus()
             const b = onBlur()
             return () => {
                 f()
                 b()
             }
         }, [])
 
         const onFocus = () => props.navigation.addListener('focus', () => {
             // do something
 
             console.log("Enters in", route && route.name)
         });
         const onBlur = () => props.navigation.addListener('blur', () => {
             // do something
 
             console.log("leaves from", route && route.name)
 
         });
     }*/
    //  console.log("session.language", session.language)

    const baseProps = {
        session, loading, setLoading, setSession, dispatch
        
        }
    return (
        <PassedComponent  {...props} {...baseProps} />
    )
})


export default WarpperComponent