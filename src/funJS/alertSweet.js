import Swal from 'sweetalert2'


export const alertSweet = (msg)=>{
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: `${msg}`,
    })
}