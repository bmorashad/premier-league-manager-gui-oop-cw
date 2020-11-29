type ModalStatus = 'open' | 'close' | 'toggle';
export type ModalAction = [modalStatus: ModalStatus, modalId: string]
