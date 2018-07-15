export default (
  state = {
    datePicker: '',
    foodName: '',
    foodQty: '',
    ducksQty: ''
  },
  action
) => {
  switch (action.type) {
    case 'DATE_SELECTED':
      return {
        ...state,
        datePicker: action.data.datePicker
      }
    case 'SUBMIT_DATA':
      return {
        ...state,
        foodName: '',
        foodType: '',
        foodQty: '',
        ducksQty: ''
      }
    default:
      return state
  }
}
