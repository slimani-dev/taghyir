<?php

namespace App\Nova;


use Illuminate\Http\Request;
use Laravel\Nova\Fields\Hidden;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Textarea;
use Laravel\Nova\Http\Requests\NovaRequest;
use MohSlimani\NovaTaniyMCE\NovaTaniyMCE;
use MohSlimani\NovaTinyMCE\NovaTinyMCE;
use Spatie\TagsField\Tags;

class Petition extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var class-string<\App\Models\Petition>
     */
    public static $model = \App\Models\Petition::class;

    /**
     * The single value that should be used to represent the resource when being displayed.
     *
     * @var string
     */
    public static $title = 'id';

    /**
     * The columns that should be searched.
     *
     * @var array
     */
    public static $search = [
        'id',
    ];

    /**
     * Get the fields displayed by the resource.
     *
     * @param \Laravel\Nova\Http\Requests\NovaRequest $request
     * @return array
     */
    public function fields(NovaRequest $request): array
    {
        return [
            ID::make()->sortable(),
            Text::make('title')->sortable()->fullWidth(),
            Textarea::make('excerpt')->sortable()->fullWidth(),
            Tags::make('Tags')->fullWidth(),
            NovaTinyMCE::make('text')->hideFromIndex()->fullWidth(),
            Hidden::make('User', 'user_id')->default(function ($request) {
                return $request->user()->id;
            }),
        ];
    }

    /**
     * Get the cards available for the request.
     *
     * @param \Laravel\Nova\Http\Requests\NovaRequest $request
     * @return array
     */
    public function cards(NovaRequest $request)
    {
        return [];
    }

    /**
     * Get the filters available for the resource.
     *
     * @param \Laravel\Nova\Http\Requests\NovaRequest $request
     * @return array
     */
    public function filters(NovaRequest $request)
    {
        return [];
    }

    /**
     * Get the lenses available for the resource.
     *
     * @param \Laravel\Nova\Http\Requests\NovaRequest $request
     * @return array
     */
    public function lenses(NovaRequest $request)
    {
        return [];
    }

    /**
     * Get the actions available for the resource.
     *
     * @param \Laravel\Nova\Http\Requests\NovaRequest $request
     * @return array
     */
    public function actions(NovaRequest $request)
    {
        return [];
    }
}
