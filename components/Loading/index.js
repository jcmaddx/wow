import styles from './loading.module.scss'
const Loading = (props) => (
	<div className={styles.loading}>
		<div id="loading-bar" className={styles.loadingbar}>
			<div className={styles.frame}></div>
			<div id="progress" className={styles.progress}></div>
		</div>
	</div>
)

export default Loading