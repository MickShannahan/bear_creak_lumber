import ListPerson from "@/components/listViews/ListPerson.vue"

export class Person {
  // NOTE I hate this model btw
  constructor(data) {
    this.id = data.people_id
    this.firstName = data.people_fname
    this.lastName = data.people_lname
    this.title = data.people_title // what is the difference between title
    this.jobTitle = data.people_job_title // and job title?
    this.department = data.people_department
    this.address = data.people_address
    this.additionalAddress = data.people_additional_address
    this.city = data.people_city
    this.zip = data.people_zip
    this.email = data.people_email
    this.altEmail = data.people_alt_email
    this.phoneExt = data.people_phone_ext
    this.phone = data.people_phone
    this.altPhone = data.people_alt_phone
    this.fax = data.people_fax
    this.skype = data.people_skype
    this.otherChat = data.people_other_chat
    this.categoryId = data.people_category_id
    this.referredBy = data.people_reffered_by
    this.customerType = data.people_customer_type
    this.rep = data.people_rep
    this.isActive = data.people_is_active
    this.companyId = data.people_company_id
    this.stateId = data.people_state_id
    this.middleName = data.people_mname
    this.webpage = data.people_webpage
    this.invoice = data.people_invoice
    this.created = new Date(data.people_created)
    this.modified = new Date(data.people_modified)
  }

  static get tableColumnsView() {
    return ['firstName', 'lastName', 'title', 'email', 'phone']
  }

  get listComponent() {
    return ListPerson
  }

  get listSelect() {
    return `${this.firstName} ${this.lastName}`
  }
}
