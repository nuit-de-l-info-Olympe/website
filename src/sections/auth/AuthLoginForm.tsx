import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
// @mui
import { Alert, IconButton, InputAdornment, Link, Stack } from "@mui/material";
// next
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
// form
import { useForm } from "react-hook-form";
import { useAuthLoginMutation } from "src/operations/mutations/authMutations";
import * as Yup from "yup";
// auth
import FormProvider, { RHFTextField } from "../../components/hook-form";
// components
import Iconify from "../../components/iconify";
import { AuthLoginType } from "../../models/auth/AuthModel";
// routes
// import { PATH_AUTH, PATH_DASHBOARD } from "../../routes/paths";

// ----------------------------------------------------------------------

type FormValuesProps = {
  email: string;
  password: string;
  afterSubmit?: string;
};

export default function AuthLoginForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const loginMutation = useAuthLoginMutation();

  const { replace } = useRouter();
  // const { data: session } = useSession();

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Votre email est requis")
      .email("Votre email doit être valide"),
    password: Yup.string().required("Mot de passe requis"),
  });

  const defaultValues = {
    email: "",
    password: "",
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (_data: FormValuesProps) => {
    setIsSubmitting(true);
    const data: AuthLoginType = {
      email: _data.email,
      password: _data.password,
    };

    loginMutation.mutate(data, {
      onSuccess: (result) => {
        if (result?.ok) {
          // replace(PATH_DASHBOARD.root).then(() => setIsSubmitting(false));
          setIsSubmitting(false);
        } else {
          reset();
          setError("afterSubmit", {
            message: "Email ou mot de passe incorrect",
          });
          setIsSubmitting(false);
        }
      },
    });
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}

        <RHFTextField name="email" label="Adresse email" />

        <RHFTextField
          name="password"
          label="Mot de passe"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  <Iconify
                    icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
      >
        Connexion
      </LoadingButton>
    </FormProvider>
  );
}
