export class Company {
  constructor(data) {
    this.id = data.company_id
    this.name = data.company_name
    this.address = data.company_address
    this.additionalAddress = data.company_additional_address
    this.city = data.company_city
    this.stateId = data.company_state
    this.zip = data.company_zip
    this.email = data.company_email
    this.altEmail = data.company_alt_email
    this.phoneExt = data.company_phone_ext
    this.phone = data.company_phone
    this.altPhone = data.company_alt_phone
    this.fax = data.company_fax
    this.taxId = data.company_tax_id
    this.referredBy = data.company_reffered_by
    this.rep = data.company_rep
    this.categoryId = data.company_category_id
    this.customerTypeId = data.company_customer_type_id
    this.isActive = data.company_is_active
    this.webpage = data.company_webpage
    this.created = new Date(data.company_created)
    this.modified = new Date(data.company_modified)
  }

  static get tableColumnsView() {
    return ['name', 'email', 'phone', 'city', 'stateId']
  }
}
