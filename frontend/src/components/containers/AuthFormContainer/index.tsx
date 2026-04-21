import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/pieces/card";
import { Input } from "@/components/pieces/input";
import { Button } from "@/components/pieces/button";
import { Label } from "@/components/pieces/label";
import { Separator } from "@/components/pieces/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/pieces/tabs";
import { Eye, EyeOff, Mail, Lock, User,  } from "lucide-react";
import { FcGoogle } from "react-icons/fc";           
import { FaFacebook } from "react-icons/fa";         

type AuthMode = "signin" | "signup";

interface AuthFormProps {
  defaultMode?: AuthMode;
  onSubmit?: (data: any, mode: AuthMode) => void;
  isLoading?: boolean;
}

export function AuthForm({ defaultMode = "signup", onSubmit, isLoading = false }: AuthFormProps) {
  const [mode, setMode] = useState<AuthMode>(defaultMode);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const data = Object.fromEntries(formData);
    onSubmit?.(data, mode);
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-xl">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold">Mon compte</CardTitle>
        <CardDescription>
          {mode === "signup" ? "Créez votre compte" : "Connectez-vous à votre compte"}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Tabs value={mode} onValueChange={(v) => setMode(v as AuthMode)} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="signup">Inscription</TabsTrigger>
            <TabsTrigger value="signin">Se connecter</TabsTrigger>
          </TabsList>

          <TabsContent value="signup">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="email" name="email" type="email" placeholder="example@email.com" className="pl-10" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Mot de passe</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Confirmer le mot de passe</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Création..." : "Sign Up"}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="signin">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="email" name="email" type="email" placeholder="example@email.com" className="pl-10" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  Remember me
                </label>
                <a href="#" className="text-primary hover:underline">Forgot Password?</a>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Connexion..." : "Sign In"}
              </Button>
            </form>
          </TabsContent>
        </Tabs>

        <div className="my-6">
          <Separator />
          <p className="text-center text-xs text-muted-foreground my-4">Ou continuer avec</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="gap-2">
            <FcGoogle size={18} />
            Google
          </Button>
          <Button variant="outline" className="gap-2">
            <FaFacebook size={18} />
            Facebook
          </Button>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          {mode === "signup" ? "Vous avez déjà un compte ?" : "Pas encore de compte ?"}
          <button
            type="button"
            onClick={() => setMode(mode === "signup" ? "signin" : "signup")}
            className="ml-1 text-primary hover:underline font-medium"
          >
            {mode === "signup" ? "Sign In" : "Sign Up"}
          </button>
        </p>
      </CardContent>
    </Card>
  );
}