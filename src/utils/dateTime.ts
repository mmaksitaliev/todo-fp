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

function sortByDate<K extends keyof any>(datePropName: K) {
  return <T extends { [P in K]: string }>(a: T, b: T) => {
    if (moment(a[datePropName]) < moment(b[datePropName])) return 1
    else if (moment(a[datePropName]) > moment(b[datePropName])) return -1
    return 0
  }
}

export const sortByCreatedDate = sortByDate('dateCreated')
