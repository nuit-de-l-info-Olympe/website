import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import { Alert, IconButton, InputAdornment, Stack } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useAuthRegisterMutation } from 'src/operations/mutations/authMutations';
import { PATH_AUTH } from 'src/routes/paths';
import FormProvider, { RHFTextField } from '../../components/hook-form';
import Iconify from '../../components/iconify';
import { getRegisterSchema } from './authFormValidationSchema';

type FormValuesProps = {
  email: string;
  password: string;
  // firstname: string;
  // lastname: string;
  afterSubmit?: string;
};

export default function AuthRegisterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

  const { replace } = useRouter();
  const defaultValues = {
    email: '',
    password: '',
    passwordConfirmation: '',
  };

  const { t } = useTranslation();
  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(getRegisterSchema(t)),
    defaultValues,
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors },
  } = methods;

  const mutation = useAuthRegisterMutation();

  const onSubmit = async (data: FormValuesProps) => {
    setIsSubmitting(true);
    mutation.mutate(data, {
      onSuccess: () => {
        console.log('onSubmit -> onSuccess');
        setIsSubmitting(false);
        // replace(PATH_AUTH.verify).then(() => setIsSubmitting(false));
      },
      onError: (error: any) => {
        console.log(data);
        reset();
        setError('afterSubmit', {
          ...error,
          message: error.message,
        });
        setIsSubmitting(false);
      },
    });
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2.5}>
        {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}

        <RHFTextField name="email" label="Adresse email" />

        <RHFTextField
          name="password"
          label="Mot de passe"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <RHFTextField
          name="passwordConfirmation"
          label="Confirmation du mot de passe "
          type={showPasswordConfirmation ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPasswordConfirmation(!showPasswordConfirmation)}
                  edge="end"
                >
                  <Iconify icon={showPasswordConfirmation ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Créer mon compte
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
