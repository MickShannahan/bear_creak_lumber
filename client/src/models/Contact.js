

export class Contact {
  constructor(data) {
    this.id = data.contact_id
    this.relId = data.contact_rel_id
    this.type = data.contact__type
  }

  static get tableColumnsView() {
    return ['id', 'relId', 'type']
  }
}