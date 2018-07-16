export default (
  state = {
    dateTime: '',
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
        dateTime: action.data.dateTime
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
