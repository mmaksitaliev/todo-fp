import moment, { Moment } from 'moment'

const FORMAT = 'YYYY-MM-DD HH:mm:ss'

type DurationConstructor = Parameters<Moment['add']>[0]

export function currentTimeFomatted() {
  return moment().format(FORMAT)
}

export function currentTime() {
  return moment()
}

export function formatDate(date: string) {
  return moment(date).format(FORMAT)
}

export function fromNow(value: DurationConstructor, unitOfTime = 'day') {
  return moment().add(value, unitOfTime)
}

export const endOfYesterday = () => {
  return moment()
    .subtract(1, 'day')
    .endOf('day')
}

export const endOfToday = () => {
  return moment().endOf('day')
}

export function dateGt(date1: string, date2: string) {
  // checks date1 > deadline
  const mDate1 = date1 && moment(date1)
  const mDate2 = date2 && moment(date2)

  return mDate1 && mDate2 && mDate1 > mDate2
}

export function dateLt(date1: string, date2: string) {
  // checks date1 > deadline
  const mDate1 = date1 && moment(date1)
  const mDate2 = date2 && moment(date2)

  return mDate1 && mDate2 && mDate1 < mDate2
}

function sortByDate<T extends string>(datePropName: T) {
  return (a: any, b: any) => {
    if (moment(a[datePropName]) < moment(b[datePropName])) return 1
    else if (moment(a[datePropName]) > moment(b[datePropName])) return -1
    return 0
  }
}

export const sortByCreatedDate = sortByDate('dateCreated')
