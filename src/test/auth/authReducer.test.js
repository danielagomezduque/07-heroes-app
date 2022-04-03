import {authReducer} from '../../auth/authReducer'
import { types } from '../../types/types'

describe('Pruebas en authReducer',()=>{

    test('debe retornar el estado por defecto',()=>{
        const estadoInicial = authReducer({logged:false}, {})

        expect(estadoInicial).toEqual({logged:false})
    })

    test('debe autenticar y colocar el "name" del usuario', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Dani'
            }
        }
        const estado = authReducer({logged:false}, action)

        expect(estado).toEqual({logged:true, name: 'Dani'})
    })

    test('debe borrar el name del usuario y logged en false', () => {
        const action = {
            type: types.logout,
        }
        const estado = authReducer({logged:true, name: 'Dani'}, action)
        
        expect(estado).toEqual({logged:false})
    })
})