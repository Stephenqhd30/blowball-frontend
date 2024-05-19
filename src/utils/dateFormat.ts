import moment from 'moment'

const dateFormat = (value: string) => {
	return moment(value).format('YYYY-MM-DD HH:mm:ss')
}

export default dateFormat;