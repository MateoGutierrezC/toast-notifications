'use client'

import { FaCircleCheck, FaClock, FaCircleXmark } from "react-icons/fa6";
import { Toaster, toast } from 'sonner'
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useEffect } from "react";

export function Home() {
  useEffect(() => {
    const getInfo = async () => {
      try {
        const response = await fetch('url/api/data'); //temporal
        const data = await response.json();
        console.log('datos', data); 

        toast('Su solicitud ha sido aprobada', {
          icon: <FaCircleCheck style={
            {
              color: 'green',
              fontSize: '1rem'
            }
          } />,
          description: 'Puede revisar su solicitud en su apartado de solicitudes',
          duration: 10000,
          cancel: {
            label: 'X'
          }
        })

      } catch (error) {
        console.error('Error', error);
        toast('Su solicitud ha sido rechazada', {
          icon: <FaCircleXmark style={
            {
              fontSize: '1rem',
              color: 'red'
            }
          } />,
          description: 'La razon por la cual su solicitud fue rechazada la encuentra en el apartado de solicitudes',
          duration: 10000,
          cancel: {
            label: 'X'
          }
        })
      }
    }
  })
}


















export default function Home2() {

  /*  const denied = () => {
     toast('Su solicitud ha sido rechazada', {
       icon: <FaCircleXmark style={
         {
           fontSize: '1rem',
           color: 'red'
         }
       } />,
       description: 'La razon por la cual su solicitud fue rechazada la encuentra en el apartado de solicitudes',
       duration: 10000,
       cancel: {
         label: 'X'
       }
     })
   }
 
   const approved = () => {
     toast('Su solicitud ha sido aprobada', {
       icon: <FaCircleCheck style={
         {
           color: 'green',
           fontSize: '1rem'
         }
       } />,
       description: 'Puede revisar su solicitud en su apartado de solicitudes',
       duration: 10000,
       cancel: {
         label: 'X',
         onClick: () => console.log('Cancel!'),
       }
     })
   }
 
   const duereq = () => {
     toast('Su solicitud esta en proceso', {
       icon: <FaClock style={
         {
           color: '#F2B705',
           fontSize: '1rem'
         }
       } />,
       cancel: {
         label: 'X'
       }
 
     })
   }
 
   const welcome = () => {
     toast(' 👋 Bienvenido')
   }
 
 
 
   return (
     <>
       <button onClick={denied}> Denegada </button>
       <button onClick={approved}>Aprobada</button>
       <button onClick={duereq}>Pendiente</button>
       <button onClick={welcome}>  Bienvenido</button>
       <Toaster />
     </>
  
   )*/
}
