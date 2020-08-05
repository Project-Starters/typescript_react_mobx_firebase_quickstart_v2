import { observable, action } from "mobx";

export class AdminStore {


    @observable offerModalOpen: boolean
    @observable requestModalOpen: boolean
    constructor(){
        this.offerModalOpen = false;
        this.requestModalOpen = false;
    }




    @action
    setOfferModalState = (s: boolean) => {
        return () => {
            this.offerModalOpen = s
        }
    }
    @action
    setRequestModalState = (s: boolean) => {
        return ()=> {
            this.requestModalOpen = s
        }
    }
}   

export default AdminStore;
