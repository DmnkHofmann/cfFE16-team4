import { Component, OnInit } from '@angular/core';
import { IPhotos } from '../IPhotos';
import { photos } from '../photos';

@Component({
  selector: 'travel-photos',
  templateUrl: './travel-photos.component.html',
  styleUrls: ['./travel-photos.component.css']
})

export class TravelPhotosComponent implements OnInit 
{
  fotos:Array<IPhotos> = photos;
  topic_name:string = 'travel';
  fotos_name:string = '';

  constructor()
  {}

  getTopicName():string
  {
    return this.topic_name;
  }

  ngOnInit(): void 
  {}
}
