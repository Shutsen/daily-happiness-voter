<template>
	<section class="hero is-fullheight is-dark is-bold">
		<div class="hero-body">
			<div class="container">
				<h1 class="title">Login</h1>
				<div class="form-wrapper">
					<div class="input-fields">
						<InputText v-model="email" label="Email" type="email" required/>
					</div>
					<div class="input-fields">
						<InputText v-model="password" label="Password" type="password" required/>
					</div>
					<div class="control">
						<button @click="login" class="button is-primary is-medium">Login</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import InputText from '../components/input/InputText'
import usersApi from '../api/users.api'
import { setAuthenticatedState } from '../utils/auth'

export default {
	components: { InputText },
	data() {
		return {
			email: '',
			password: '',
			errorMessage: ''
		}
	},
	methods: {
		validateFields() {
			if (!this.email) {
				this.errorMessage = 'Please fill in a valid email address'
				return false
			}
			if (!this.password) {
				this.errorMessage = 'Please fill in your password'
				return false
			}
			this.errorMessage = ''
			return true
		},
		async login() {
			// validation
			const isValid = this.validateFields()
			if (!isValid) {
				return this.$snotify.error(this.errorMessage)
			}

			// try logging in
			try {
				const { email, password } = this
				const response = await usersApi.login({ email, password })
				await setAuthenticatedState(response.token, response.user_id)
				this.$snotify.success(response.message)
				this.$router.push(`/dashboard`)
			} catch(e) {
				console.log('Sign up error', e)
				return this.$snotify.error('Authentication failed')
			}
		}
	}
}
</script>