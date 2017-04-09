import { connect } from 'react-redux'
import { actions } from '../modules/bankFileUploads'
import BankFileUploads from '../components/BankFileUploads'

const mapDispatchToProps = {
  ...actions
}

const mapStateToProps = (state) => state.bankFileUploads

export default connect(mapStateToProps, mapDispatchToProps)(BankFileUploads)
