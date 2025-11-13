import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

export function OTPForm({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('flex flex-col gap-6 md:min-h-[450px]', className)}
      {...props}
    >
      <Card className="flex-1 overflow-hidden p-0">
        <CardContent className="grid flex-1 p-0 md:grid-cols-2">
          <form className="flex flex-col items-center justify-center p-6 md:p-8">
            <FieldGroup>
              <Field className="items-center text-center">
                <h1 className="text-2xl font-bold">
                  Ingresa el código de verificación
                </h1>
                <p className="text-muted-foreground text-sm text-balance">
                  Enviamos un código de 6 dígitos a tu correo electrónico
                </p>
              </Field>
              <Field>
                <FieldLabel htmlFor="otp" className="sr-only">
                  Código de verificación
                </FieldLabel>
                <InputOTP
                  maxLength={6}
                  id="otp"
                  required
                  containerClassName="gap-4"
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
                <FieldDescription className="text-center">
                  Ingresa el código de 6 dígitos enviado a tu correo
                  electrónico.
                </FieldDescription>
              </Field>
              <Field>
                <Button type="submit">Verificar</Button>
                <FieldDescription className="text-center">
                  ¿No recibiste el código?{' '}
                  <Button variant="link" className="text-black/55">
                    Reenviar
                  </Button>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
          <div className="bg-muted relative hidden md:block">
            <Image
              width={800}
              height={600}
              src="/club.png"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <FieldDescription className="text-center">
        Al registrarte, aceptas nuestros{' '}
        <Link href="#">Términos de Servicio</Link> y{' '}
        <Link href="#">Política de Privacidad</Link>.
      </FieldDescription>
    </div>
  )
}
