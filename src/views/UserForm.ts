import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.change-age': this.onChangeAgeClick,
      'click:.change-name': this.onChangeNameClick,
      'click:.save-model': this.onSaveClick
    };
  }

  onChangeAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onChangeNameClick = (): void => {
    const input = this.parent.querySelector('input');
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  onSaveClick = (): void => {
    this.model.save();
  }

  template(): string {
    return `
      <div>
        <input placeholder = ${this.model.get('name')} />
        <button class="change-name">Change Name</button>
        <button class="change-age">Set Random Age</buttion>
        <button class="save-model">Save User</save>
      </div>
    `;
  }
}
