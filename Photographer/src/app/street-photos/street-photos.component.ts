import { Component, OnInit } from '@angular/core';
import { IPhotos } from '../IPhotos';
import { photos } from '../photos';

@Component({
  selector: 'street-photos',
  templateUrl: './street-photos.component.html',
  styleUrls: ['./street-photos.component.css']
})

//const topic_name = 'street';
export class StreetPhotosComponent implements OnInit 
{
  fotos:Array<IPhotos> = photos;
  topic_name:string = 'street';
  fotos_name:string = '';

  constructor() { }

  getTopicName():string
  {
    return this.topic_name;
  }

  ngOnInit(): void 
  {

  }

}
