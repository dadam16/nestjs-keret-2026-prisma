import { IsBoolean, IsBooleanString, IsIn, IsInt, IsNotEmpty, Matches, Min } from "class-validator";

export class CreateDrinkDto {

    @IsNotEmpty()
    @Matches(/^[a-z]+$/,{message:'A név csak angol kisbetű lehet'})
    name:string;

    @IsNotEmpty()
    @IsBooleanString()
    alcoholic:boolean;

    @IsNotEmpty()
    @IsInt()
    @Min(0)
    price:number;

    @IsNotEmpty()
    size:string;
}
