import 'popper.js';
import { Modal as BsModal } from 'bootstrap/dist/js/bootstrap.esm.min';

export class Modal {

    constructor(args) {
      let defaultParameters = {
        trigger: null,
        options: {
          keyboard: true,
          backdrop: true,
          focus: true,
          show: true
        },
        onConfirm: () => {},
        onDeny: () => {},
        onClose: () => {},
        id: 'modal'
      };
      args = {...defaultParameters, ...args};

      const {id, onClose, onConfirm, onDeny, trigger, options} = args;

      const modal = document.getElementById(id);

      this.bsinstance = new BsModal(modal, options);

      this.bsinstance.show();

      modal.addEventListener('hidden.bs.modal', function () {
        onClose(modal);
      });

      modal.addEventListener('show.bs.modal', event => {
        const numberModal = document.querySelectorAll('.modal.show').length;
        modal.style.zIndex = '' + 1000040 + 10 * numberModal;
        let modalBackdrops = document.querySelectorAll('.modal-backdrop:not(.modal-stack)');
        for (
          let cursor = 0, cursorMax = modalBackdrops.length;
          cursor < cursorMax;
          cursor++
        ) {
          const modalBackdrop = modalBackdrops.pop();
          modalBackdrop.style.zIndex = '' + 1000039 + 10 * cursor;
          setTimeout(function () {
            modalBackdrop.classList.add('modal-stack');
          }, 0);
        }
      });

      const denyButton = modal.querySelector('.modal-footer .btn-danger');
      if (denyButton) {
        denyButton.removeEventListener('click', _onDeny, false);
        denyButton.addEventListener('click', _onDeny, false);
      }

      const confirmButton = modal.querySelector('.modal-footer .btn-primary');
      if (confirmButton) {
        confirmButton.removeEventListener('click', _onConfirm);
        confirmButton.addEventListener('click', _onConfirm);
      }

      function _onDeny (event) {
        event.preventDefault();
        onDeny(modal);
        if (trigger) {
          const newTrigger = trigger.cloneNode(true);
          trigger.parentNode.replaceChild(newTrigger, trigger);
          newTrigger.addEventListener('click', () => (new Modal(args)));
        }
        return false;
      }

      function _onConfirm (event) {
        event.preventDefault();
        onConfirm(modal);
        return false;
      }
    }

}
