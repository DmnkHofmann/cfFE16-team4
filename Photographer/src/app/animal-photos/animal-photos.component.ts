import { Component, OnInit } from '@angular/core';
import { IPhotos } from '../IPhotos';
import { photos } from '../photos';

@Component({
  selector: 'animal-photos',
  templateUrl: './animal-photos.component.html',
  styleUrls: ['./animal-photos.component.css']
})
export class AnimalPhotosComponent implements OnInit 
{
  fotos:Array<IPhotos> = photos;
  topic_name:string = 'animal';
  fotos_name:string = '';

  constructor() { }

  getTopicName():string
  {
    return this.topic_name;
  }

  ngOnInit(): void {
  }

}
