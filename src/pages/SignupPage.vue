<template>
	<section class="hero is-fullheight is-dark is-bold">
		<div class="hero-body">
			<div class="container">
				<h1 class="title">Start voting!</h1>
				<h2 class="subtitle">By filling in the following form</h2>
				<div class="form-wrapper">
					<div class="input-fields">
						<InputText v-model="first_name" label="First name" required/>
						<InputText v-model="last_name" label="Last name" required/>
					</div>
					<div class="input-fields">
						<InputText v-model="email" label="Email" type="email" required/>
					</div>
					<div class="input-fields">
						<InputText v-model="password" label="Password" type="password" required/>
					</div>
					<div class="input-fields">
						<InputText v-model="passwordRepeat" label="Confirmation password" type="password" required/>
					</div>
					<div class="control">
						<button @click="signup" class="button is-primary is-medium">Register</button>
						<router-link class="button is-light is-medium ml-10px" :to="`/login`">Or log in</router-link>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import InputText from '../components/input/InputText'
import usersApi from '../api/users.api'
import auth from '../utils/auth'

export default {
	components: { InputText },
	data() {
		return {
			first_name: '',
			last_name: '',
			email: '',
			password: '',
			passwordRepeat: '',
			errorMessage: ''
		}
	},
	methods: {
		validateFields() {
			if (!this.first_name || !this.last_name) {
				this.errorMessage = 'Please fill in all fields'
				return false
			}
			if (!this.email) {
				this.errorMessage = 'Please fill in a valid email address'
				return false
			}
			if (!this.password || !this.passwordRepeat) {
				this.errorMessage = 'Please fill in both your password and confirmation password'
				return false
			}
			if (this.password !== this.passwordRepeat) {
				this.errorMessage = 'Your passwords do not match'
				return false
			}
			this.errorMessage = ''
			return true
		},
		async signup() {
			// validation
			const isValid = this.validateFields()
			if (!isValid) {
				return this.$snotify.error(this.errorMessage)
			}

			// try signing up
			try {
				const { first_name, last_name, email, password } = this
				const response = await usersApi.signup({ first_name, last_name, email, password })
				await auth.setAuthenticatedState(response.token)
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
