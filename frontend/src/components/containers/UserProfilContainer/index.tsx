import { Card, CardContent, CardHeader} from "@/components/pieces/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/pieces/avatar";
import { Button } from "@/components/pieces/button";
import {Book, Car, Church, Home, Pencil, School, } from "lucide-react";

interface UserProfileCardProps {
  name: string;
  avatarUrl: string;
  registrationDate: string;
  country: string;
  birthDate: string;
  email: string;
  phone: string;
}

export function UserProfileCard({
  name,
  avatarUrl,
  registrationDate,
  country,
  birthDate,
  email,
  phone,
}: UserProfileCardProps) {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center gap-4 pb-6">
        <Avatar className="h-24 w-24">
          <AvatarImage src={avatarUrl} />
          <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-2xl font-semibold">{name}</h2>
          <p className="text-sm text-muted-foreground">MIHARY {registrationDate}</p>
        </div>
        <Button variant="ghost" icon={<Pencil/>} iconPosition="right" className="ml-auto">
          
        </Button>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Pays</p>
            <p className="font-medium">{country}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Date de naissance</p>
            <p className="font-medium">{birthDate}</p>
          </div>
        </div>

        <div>
          <p className="text-muted-foreground">E-mail</p>
          <p className="font-medium">{email}</p>
        </div>
        <div>
          <p className="text-muted-foreground">Тéléphone</p>
          <p className="font-medium">{phone}</p>
        </div>

        <div className="flex gap-3">
          <Button variant="ghost" ><Book /></Button>
          <Button variant="ghost"><Car /></Button>
          <Button variant="ghost"><Home /></Button>
          <Button variant="ghost"><School /></Button>
          <Button variant="ghost" ><Church /></Button>
        </div>
      </CardContent>
    </Card>
  );
}