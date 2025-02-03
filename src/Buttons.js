import { Button } from 'primereact/button';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { useNavigate } from 'react-router-dom';

const Buttons = ({stepperRef, index}) => {
  const navigate = useNavigate();
   const confirm1 = () => {
      confirmDialog({
        message: 'Are you sure you want to Submit?',
          header: 'Confirmation',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
            navigate('/result');
          },
          defaultFocus: 'accept',
      });
      }
  return (
    <div className="flex pt-4 w-full mr-auto ml-auto justify-content-between" style={{ width: '100%',
                       display: 'flex',
                       flexDirection: 'row',
                       justifyContent: 'space-between',
                       alignItems: 'center',
                       padding: '1rem',
                       marginTop: '1rem',
                           borderRadius: '0.5rem',
   
                        }}>
                      {index !== 9 ?
                         <>  <Button className="flex" label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} disabled={index === 0} />
                           <Button className="flex" label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={() => stepperRef.current.nextCallback()} disabled={index === 9} />
                               </> :
                               <>
                                   <Button className="flex" label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} disabled={index === 0} />
   
                                   <ConfirmDialog />
                                   <Button className="flex" onClick={confirm1} label="Submit" icon="pi pi-check" iconPos="right" />
   
                               </>
                           }
                       </div>
  )
}
export default Buttons