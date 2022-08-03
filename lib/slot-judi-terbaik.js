'use babel';

import SlotJudiTerbaikView from './slot-judi-terbaik-view';
import { CompositeDisposable } from 'atom';

export default {

  slotJudiTerbaikView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.slotJudiTerbaikView = new SlotJudiTerbaikView(state.slotJudiTerbaikViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.slotJudiTerbaikView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'slot-judi-terbaik:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.slotJudiTerbaikView.destroy();
  },

  serialize() {
    return {
      slotJudiTerbaikViewState: this.slotJudiTerbaikView.serialize()
    };
  },

  toggle() {
    console.log('SlotJudiTerbaik was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
