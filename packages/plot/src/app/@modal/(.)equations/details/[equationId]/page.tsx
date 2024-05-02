import EquationModalPage, {PageProps} from "../../../../../ulld_app/equations/@modal/(.)equations/details/[equationId]/page"


const EquationDetailModal = async (props: PageProps) => {
    return (
        <EquationModalPage {...props}/>
    )
}


EquationDetailModal.displayName = "EquationDetailModal"


export default EquationDetailModal;
