import * as Yup from 'yup';
import authService from '../../services/authService';

export const getRegisterSchema = (t: Function) =>
	Yup.object().shape({
		email: Yup.string()
			.required(t('Votre email est requis'))
			.email(t('Votre email doit être valide'))
			.test(
				'unique email',
				t('Email déjà enregistré, veuillez vous connecter'),
				async (value, valueContext) => {
					try {
						const res = await authService.checkEmail({
							email: value as string,
						});
						return res.data.success;
					} catch (err) {
						return false;
					}
				}
			),
		password: Yup.string()
			.required(t('Mot de passe requis'))
			.test(
				'password',
				t(
					'Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.'
				),
				(value) => {
					if (value) {
						const schema = Yup.string().matches(
							/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&+])[A-Za-z\d@$!%*#?&+]{8,}$/,
							''
						);
						return schema.isValidSync(value);
					}
					return true;
				}
			),
		passwordConfirmation: Yup.string().oneOf(
			[Yup.ref('password'), null],
			t('Les mots de passe doivent correspondre')
		),
	});

export const ForgotPasswordSchema = Yup.object().shape({
	email: Yup.string().required('Email is required').email('Votre email doit être valide'),
});

export const ResetPasswordSchema = Yup.object().shape({
	password: Yup.string()
		.min(6, 'Le mot de passe doit être au moins de 6 caractères')
		.required('Mot de passe requis'),
	confirmPassword: Yup.string()
		.required('Vous devez confirmer le mot de passe')
		.oneOf([Yup.ref('password'), null], 'Les mots de passe doivent correspondre'),
});
