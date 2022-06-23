import { Component, OnInit } from '@angular/core';
import { IPhotos } from '../IPhotos';
import { photos } from '../photos';

@Component({
  selector: 'model-photos',
  templateUrl: './model-photos.component.html',
  styleUrls: ['./model-photos.component.css']
})
export class ModelPhotosComponent implements OnInit 
{
  fotos:Array<IPhotos> = photos;
  topic_name:string = 'model';
  fotos_name:string = '';

  constructor() { }

  getTopicName():string
  {
    return this.topic_name;
  }

  ngOnInit(): void {
  }

}
